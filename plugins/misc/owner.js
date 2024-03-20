exports.run = {
   usage: ['owner'],
   category: 'miscs',
   async: async (m, {
      client,
      env,
      Func
   }) => {
      client.sendContact(m.chat, [{
         name: env.owner_name,
         number: env.owner,
         about: 'Owner & Creator'
      }], m, {
         org: 'Spike Team',
         website: 'https://github.com/kysage1',
         email: 'spikeinc3@gmail.com'
      })
   },
   error: false,
   cache: true,
   location: __filename
}