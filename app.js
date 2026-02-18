process.env.NITRO_PORT ??= process.env.PORT;      // Hostinger provides PORT
process.env.NITRO_HOST ??= '0.0.0.0';             // listen publicly

import './.output/server/index.mjs'
