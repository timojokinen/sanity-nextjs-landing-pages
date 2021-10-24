export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6175cb37b84e301a334542f0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rvycjdyk',
                  apiId: 'be476e4d-6267-438f-8a56-8accc596788e'
                },
                {
                  buildHookId: '6175cb37b251960f676c8a2d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pp5jxj6k',
                  apiId: '6ecebae0-df8e-4c27-b2ce-752b8740b9e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/timojokinen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pp5jxj6k.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
