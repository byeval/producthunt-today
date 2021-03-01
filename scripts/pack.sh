copy_assets() {
  cp ./src/sitemap.json ./dist
  cp -R ./src/functions ./dist
  tsc ./dist/functions/**/*.ts --outDir ./dist/functions
  rm -rf ./dist/functions/**/*.ts
}

$(copy_assets)