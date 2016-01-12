/*
 * You may define your screens here.
 * Please refer to the documentation on the details of screen settings.
 */
export var screens : Megazord.ContainerScreenList = {
    root: {
        type: 'sgb-parent-menu#1.0',
        /*type: '@sgb-test-parent-menu',*/
        params: {
            menu: [
            {title: 'Companies', screen: 'root.companies'},
            {title: 'Form', screen: 'root.form'},
            {title: 'Contact', screen: 'root.contact'},
            {title: 'News', screen: 'root.news'},
            {title: 'Sessions', screen: 'root.sessions'},
            {title: 'Dashboard', screen: 'root.dashboard'},
            {title: 'Collapse', screen: 'root.collapse'}
            ]
        },
        childScreens: {
            companies: {
                type: 'sgb-screen-list', 
                params:{
                    title: "title_companies",
                    showSearch: true, 
                    showIcon: 'icon ion-chevron-right',
                    templateType: "@compact-left"
                },   
                dataSource: {
                    type: 'sgb-datasource-json#1.0',
                    params: {
                        path: 'exhibitors.json'
                    }
                }
                             
            },
            login:{
                type: 'sgb-screen-login',
                default: true,
                params:{

                }                
            },
            detail: {
                type: 'sgb-screen-detail', 
                dataSource: {
                    type: 'sgb-datasource-param',
                    params: {
                    }
                },
                params:{
                    hideNavBar: false, 
                    templateType: '@contact'
                }
            },
            dashboard: {
                type: 'sgb-screen-dashboard',
                dataSource:{
                    type: 'sgb-datasource-json#1.0',
                    params: {
                        path: 'test_dash.json'
                    }
                },
                params: {
                    templateType: "@category",
                    rowImages: '2'
                }
            },
            collapse : {
                type: 'sgb-screen-collapse-detail',
                dataSource: {
                    type: 'sgb-datasource-json#1.0',
                    params: {
                        path: 'collapse.json'
                    }
                },
                params: {
                    title: "collapse_title"
                }
            },
            form: {
                type: 'sgb-screen-short-form', 
                dataSource: {
                    type: 'sgb-datasource-json#1.0',
                    params: {
                        path: 'https://s3-us-west-2.amazonaws.com/megazord/tutorial/form.json'
                    }
                },
                params:{
                    title: 'form'
                }
            },
            contact: {
                type: 'sgb-screen-contact',
                dataSource:{
                    type: 'sgb-datasource-json#1.0',
                    params: {
                        path: 'https://s3-us-west-2.amazonaws.com/megazord/techDay/data/contactInfo.json'
                    }
                },
                params:{

                }
            },
            news: {
              type: 'sgb-screen-list',
              dataSource: {
                type: 'sgb-datasource-json#1.0',
                params: {
                  path: 'https://s3-us-west-2.amazonaws.com/megazord/techDay/data/noticias.json'
                }
              },
              params: {
                templateType: '@compact-right'
              }
            },

            sessions: {
              type: 'sgb-screen-group-list',
              dataSource: {
                type: 'sgb-datasource-json#1.0',
                params: {
                  path: 'https://s3-us-west-2.amazonaws.com/megazord/techDay/data/sesiones.json'
                }
              },
              params: {
              }
            }
        }
    }
    
};