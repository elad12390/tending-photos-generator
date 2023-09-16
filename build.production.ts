

Bun.build({
    entrypoints: ['./src/main.ts'],
    outdir: './dist',
    target: 'bun',
    sourcemap: 'inline',
    root: 'src',
    minify: true
});