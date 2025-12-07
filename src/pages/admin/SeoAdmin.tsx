import { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Pencil, Loader2, Save, X } from "lucide-react";

interface SeoMetadata {
  id: string;
  page_slug: string;
  meta_title: string;
  meta_description: string | null;
  og_image_url: string | null;
}

export default function AdminSeo() {
  const [pages, setPages] = useState<SeoMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    meta_title: "",
    meta_description: "",
    og_image_url: "",
  });

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("seo_metadata")
      .select("*")
      .order("page_slug");

    if (error) {
      toast({
        title: "Erro",
        description: "Não foi possível carregar os dados de SEO.",
        variant: "destructive",
      });
    } else {
      setPages(data || []);
    }
    setLoading(false);
  };

  const startEditing = (page: SeoMetadata) => {
    setEditingId(page.id);
    setFormData({
      meta_title: page.meta_title,
      meta_description: page.meta_description || "",
      og_image_url: page.og_image_url || "",
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setFormData({
      meta_title: "",
      meta_description: "",
      og_image_url: "",
    });
  };

  const handleSave = async (id: string) => {
    setSaving(true);

    try {
      const { error } = await supabase
        .from("seo_metadata")
        .update({
          meta_title: formData.meta_title,
          meta_description: formData.meta_description || null,
          og_image_url: formData.og_image_url || null,
        })
        .eq("id", id);

      if (error) throw error;

      toast({ title: "SEO atualizado!" });
      setEditingId(null);
      fetchPages();
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Não foi possível salvar.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const getPageName = (slug: string) => {
    const names: Record<string, string> = {
      "/": "Página Inicial",
      "/paineis-de-led": "Painéis de LED",
      "/letreiros": "Letreiros",
      "/totens": "Totens",
      "/estruturas": "Estruturas",
      "/manutencao": "Manutenção",
      "/pecas": "Peças",
      "/blog": "Blog",
    };
    return names[slug] || slug;
  };

  return (
    <ProtectedRoute requireAdmin>
      <AdminLayout>
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-heading font-bold">SEO</h1>
            <p className="text-muted-foreground mt-1">
              Gerencie as meta tags de cada página do site.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="space-y-4">
              {pages.map((page) => (
                <div
                  key={page.id}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-heading font-bold">
                        {getPageName(page.page_slug)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {page.page_slug}
                      </p>
                    </div>
                    {editingId !== page.id && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => startEditing(page)}
                      >
                        <Pencil className="w-4 h-4 mr-2" />
                        Editar
                      </Button>
                    )}
                  </div>

                  {editingId === page.id ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor={`title-${page.id}`}>
                          Meta Title
                          <span className="text-muted-foreground text-xs ml-2">
                            ({formData.meta_title.length}/60)
                          </span>
                        </Label>
                        <Input
                          id={`title-${page.id}`}
                          value={formData.meta_title}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              meta_title: e.target.value,
                            }))
                          }
                          maxLength={60}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`desc-${page.id}`}>
                          Meta Description
                          <span className="text-muted-foreground text-xs ml-2">
                            ({formData.meta_description.length}/160)
                          </span>
                        </Label>
                        <Textarea
                          id={`desc-${page.id}`}
                          value={formData.meta_description}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              meta_description: e.target.value,
                            }))
                          }
                          rows={2}
                          maxLength={160}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`og-${page.id}`}>OG Image URL</Label>
                        <Input
                          id={`og-${page.id}`}
                          value={formData.og_image_url}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              og_image_url: e.target.value,
                            }))
                          }
                          placeholder="https://..."
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={cancelEditing}
                        >
                          <X className="w-4 h-4 mr-2" />
                          Cancelar
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleSave(page.id)}
                          disabled={saving}
                        >
                          {saving ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <Save className="w-4 h-4 mr-2" />
                          )}
                          Salvar
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Title: </span>
                        <span>{page.meta_title}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Description: </span>
                        <span>{page.meta_description || "—"}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">OG Image: </span>
                        <span className="truncate">
                          {page.og_image_url || "—"}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
