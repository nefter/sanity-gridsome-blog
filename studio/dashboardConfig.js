export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '603e8c41b8fa02124b54e920',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-fh4mickd',
                  apiId: 'cc26b748-2441-4b7e-a9c4-1039574ef99b'
                },
                {
                  buildHookId: '603e8c4144fb8e108f28b790',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-2ikobm9a',
                  apiId: '6db754cd-0b0b-4ac0-aec1-e370975484e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nefter/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-2ikobm9a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
