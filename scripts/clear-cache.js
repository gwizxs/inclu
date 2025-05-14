const { join } = require('path');
const { rmSync } = require('fs');

function clearCache() {
    const cacheDir = join(__dirname, '..', 'node_modules', '.cache');
    try {
        rmSync(cacheDir, { recursive: true, force: true });
    } catch (err) {
        console.error('Ошибка при удалении кэша:', err);
    }
}

module.exports = clearCache;
