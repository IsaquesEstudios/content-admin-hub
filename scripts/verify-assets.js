/**
 * Script de verificação de assets da campanha
 * Executado após o build para garantir que as imagens essenciais estão incluídas
 */

const fs = require('fs');
const path = require('path');

const CAMPAIGN_IMAGES = [
  'images/campanha/comunicacao-visual.jpg',
  'images/campanha/comunicacao-visual-celular.jpg',
  'images/campanha/paineis-em-led.jpg',
  'images/campanha/comunicacao.jpg'
];

const DIST_DIR = path.join(__dirname, '..', 'dist');

console.log('\n🔍 Verificando assets da campanha...\n');

let missingFiles = [];
let foundFiles = [];

CAMPAIGN_IMAGES.forEach(image => {
  const filePath = path.join(DIST_DIR, image);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    foundFiles.push({ path: image, size: `${(stats.size / 1024).toFixed(2)} KB` });
  } else {
    missingFiles.push(image);
  }
});

// Exibir resultados
if (foundFiles.length > 0) {
  console.log('✅ Imagens encontradas:');
  foundFiles.forEach(file => {
    console.log(`   - ${file.path} (${file.size})`);
  });
}

if (missingFiles.length > 0) {
  console.log('\n❌ ERRO: Imagens faltando:');
  missingFiles.forEach(file => {
    console.log(`   - ${file}`);
  });
  console.log('\n⚠️  O deploy pode ter problemas com imagens faltando!\n');
  process.exit(1);
}

console.log('\n✅ Todas as imagens da campanha estão presentes no build!\n');
