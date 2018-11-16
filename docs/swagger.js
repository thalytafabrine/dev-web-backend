const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDef = {
    'basePath': '/',
    'host': 'localhost:8080',
    'info': {
        'description': 'Sistema com intuito de ajudar os alunos em seus estudos, facilitando a memorização de termos através de quizzes baseados em flashcards.',
        'title': 'Memorize',
        'version': '1.0.0',
        'license': {
            'name': 'Memorize on GitHub',
            'url': 'https://github.com/thalytafabrine/dev-web-backend'
        }
    },
    'consumes': [
        'application/json'
    ],
    'produces': [
        'application/json'
    ],
    'paths': {
        '/user' : {
            'get': {
                'tags': [
                    'User'
                ],
                'summary': 'Get all system users',
                'responses': {
                    '200' : {
                        'description': 'OK',
                        'schema': {
                            '$ref': '#/definitions/User'
                        }
                    }
                }
            },
            'post': {
                'tags': [
                    'User'
                ],
                'summary': 'Create a new User',
                'parameters': [
                    {
                        'name': 'user',
                        'in': 'body',
                        'description': 'User that we want to create',
                        'required': true,
                        'schema': {
                            '$ref': '#/definitions/User'
                        }
                    }
                ],
                'produces': [
                    'application/json'
                ],
                'responses': {
                    '201' : {
                        'description': "{'result': {New User}}"
                    }
                }
            }
        },
        '/user/{username}': {
            'get': {
                'tags': [
                    'User'
                ],
                'summary': 'Get User by username',
                'parameters': [
                    {
                        'name': 'username',
                        'in': 'path',
                        'description': 'Username of user that we want to find',
                        'required': true,
                        'type': 'string'
                    }
                ],
                'responses': {
                    '200' : {
                        'description': 'OK',
                        'schema': {
                            '$ref': '#/definitions/User'
                        }
                    }
                }
            },
            'put': {
                'tags': [
                    'User'
                ],
                'summary': 'Update user by username',
                'parameters': [
                    {
                        'name': 'username',
                        'in': 'path',
                        'description': 'Username of user that we want to update',
                        'required': true,
                        'type': 'string'
                    },
                    {
                        'name': 'user',
                        'in': 'body',
                        'description': 'User with new values of properties',
                        'required': false,
                        'schema': {
                            '$ref': '#/definitions/User'
                        }
                    }
                ],
                'produces': [
                    'application/json'
                ],
                'responses': {
                    '201' : {
                        'description': "{'result': {New User}}"
                    }
                }
            },
            'delete': {
                'tags': [
                    'User'
                ],
                'summary': 'Delete user by username',
                'parameters': [
                    {
                        'name': 'username',
                        'in': 'path',
                        'description': 'Username of user that we want to delete',
                        'required': true,
                        'type': 'string'
                    }
                ],
                'responses': {
                    '200': {
                        'description': "{'message': 'Usuario removido com sucesso.'}"
                    }
                }
            }
        },
        '/disciplina': {
            'get': {
                'tags': [
                    'Subject'
                ],
                'summary': 'Get all system Subjects',
                'responses': {
                    '200' : {
                        'description': 'OK',
                        'schema': {
                            '$ref': '#/definitions/Subject'
                        }
                    }
                }
            },
            'post': {
                'tags': [
                    'Subject'
                ],
                'summary': 'Create a new Subject',
                'parameters': [
                    {
                        'name': 'subject',
                        'in': 'body',
                        'description': 'Subject that we want to create',
                        'required': true,
                        'schema': {
                            '$ref': '#/definitions/Subject'
                        }
                    }
                ],
                'produces': [
                    'application/json'
                ],
                'responses': {
                    '201' : {
                        'description': "{'result': {New Subject}}"
                    }
                }
            }
        },
        '/disciplina/{idDisciplina}': {
            'get': {
                'tags': [
                    'Subject'
                ],
                'summary': 'Get Subject by id',
                'parameters': [
                    {
                        'name': 'idDisciplina',
                        'in': 'path',
                        'description': 'Id of Subject that we want to find',
                        'required': true,
                        'type': 'string'
                    }
                ],
                'responses': {
                    '200' : {
                        'description': 'OK',
                        'schema': {
                            '$ref': '#/definitions/Subject'
                        }
                    }
                }
            },
            'put': {
                'tags': [
                    'Subject'
                ],
                'summary': 'Update Subject by id',
                'parameters': [
                    {
                        'name': 'idDisciplina',
                        'in': 'path',
                        'description': 'Id of Subject that we want to update',
                        'required': true,
                        'type': 'string'
                    },
                    {
                        'name': 'Subject',
                        'in': 'body',
                        'description': 'Subject with new values of properties',
                        'required': false,
                        'schema': {
                            '$ref': '#/definitions/Subject'
                        }
                    }
                ],
                'produces': [
                    'application/json'
                ],
                'responses': {
                    '201' : {
                        'description': "{'result': {New Subject}}"
                    }
                }
            },
            'delete': {
                'tags': [
                    'Subject'
                ],
                'summary': 'Delete Subject by id',
                'parameters': [
                    {
                        'name': 'idDisciplina',
                        'in': 'path',
                        'description': 'Id of Subject that we want to delete',
                        'required': true,
                        'type': 'string'
                    }
                ],
                'responses': {
                    '200': {
                        'description': "{'message': 'Disciplina removida com sucesso.'}"
                    }
                }
            }
        },
        '/listaEstudo': {
            'get': {
                'tags': [
                    'StudyList'
                ],
                'summary': 'Get all system Study Lists',
                'responses': {
                    '200' : {
                        'description': 'OK',
                        'schema': {
                            '$ref': '#/definitions/StudyList'
                        }
                    }
                }
            },
            'post': {
                'tags': [
                    'StudyList'
                ],
                'summary': 'Create a new Study List',
                'parameters': [
                    {
                        'name': 'studyList',
                        'in': 'body',
                        'description': 'StudyList that we want to create',
                        'required': true,
                        'schema': {
                            '$ref': '#/definitions/StudyList'
                        }
                    }
                ],
                'produces': [
                    'application/json'
                ],
                'responses': {
                    '201' : {
                        'description': "{'result': {New StudyList}}"
                    }
                }
            }
        },
        '/listaEstudo/{idLista}': {
            'get': {
                'tags': [
                    'StudyList'
                ],
                'summary': 'Get Study List by id',
                'parameters': [
                    {
                        'name': 'idLista',
                        'in': 'path',
                        'description': 'id of study list that we want to find',
                        'required': true,
                        'type': 'string'
                    }
                ],
                'responses': {
                    '200' : {
                        'description': 'OK',
                        'schema': {
                            '$ref': '#/definitions/StudyList'
                        }
                    }
                }
            },
            'put': {
                'tags': [
                    'StudyList'
                ],
                'summary': 'Update study list by id',
                'parameters': [
                    {
                        'name': 'idLista',
                        'in': 'path',
                        'description': 'Id of Study list that we want to update',
                        'required': true,
                        'type': 'string'
                    },
                    {
                        'name': 'studyList',
                        'in': 'body',
                        'description': 'Study list with new values of properties',
                        'required': false,
                        'schema': {
                            '$ref': '#/definitions/StudyList'
                        }
                    }
                ],
                'produces': [
                    'application/json'
                ],
                'responses': {
                    '201' : {
                        'description': "{'result': {New StudyList}}"
                    }
                }
            },
            'delete': {
                'tags': [
                    'StudyList'
                ],
                'summary': 'Delete Study List by id',
                'parameters': [
                    {
                        'name': 'idLista',
                        'in': 'path',
                        'description': 'Id of study list that we want to delete',
                        'required': true,
                        'type': 'string'
                    }
                ],
                'responses': {
                    '200': {
                        'description': "{'message': 'Lista de estudo removida com sucesso.'}"
                    }
                }
            }
        },
        '/auth': {
            'post': {
                'tags': [
                    'Auth'
                ],
                'summary': 'Attempt to log user in system',
                'produces': [
                    'application/json'
                ],
                'parameters': [
                    {
                        'name': 'user',
                        'in': 'body',
                        'description': 'User credentials',
                        'required': true,
                        'schema': {
                            '$ref': '#/definitions/Auth'
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': "{'message': 'Enjoy your token!'}"
                    }
                }
            }
        }
    },
    'definitions': {
        'User': {
            'required': [
                'username',
                'password',
                'type'
            ],
            'properties': {
                'username': {
                    'type': 'string'
                },
                'password': {
                    'type': 'string'
                },
                'type': {
                    'type': 'string'
                },
                'subjects': {
                    'type': 'array',
                    'items': {'type': 'Disciplina.ObjectId'}
                },
                'studyLists': {
                    'type': 'array',
                    'items': {'type': 'ListaEstudo.ObjectId'}
                }
            },
            'example': {
                'username': 'user',
                'password': '12345',
                'type': 'STUDENT'
            }
        },
        'Subject': {
            'required': [
                'name',
                'teacher'
            ],
            'properties': {
                'name': {
                    'type': 'string'
                },
                'teacher': {
                    'type': 'string'
                },
                'studyLists': {
                    'type': 'array',
                    'items': {'type': 'ListaEstudo.ObjectId'}
                }
            },
            'example': {
                'name': 'subject',
                'teacher': 'Teacher X',
                'studyLists': []
            }
        },
        'StudyList': {
            'required': [
                'name',
                'cards'
            ],
            'properties': {
                'name': {
                    'type': 'string'
                },
                'cards': {
                    'type': 'array',
                    'items': {'type': 'Card.ObjectId'}
                }
            },
            'example': {
                'name': 'study list 1',
                'cards': [],
            }
        },
        'Auth': {
            'required': [
                'username',
                'password'
            ],
            'properties': {
                'username': {
                    'type': 'string'
                },
                'password': {
                    'type': 'string'
                }
            },
            'example': {
                'username': 'user',
                'password': '12345'
            }
        }
    }
};

const options = {
    'apis': ['../**/*.docs.js'],
    'swaggerDefinition': swaggerDef
};

module.exports = swaggerJSDoc(options);