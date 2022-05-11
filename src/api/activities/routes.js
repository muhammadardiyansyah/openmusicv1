const routes = (handler) => [
  {
    method: 'GET',
    path: '/playlists/{id}/activities',
    handler: handler.getActivitiesByIdHandler,
    options: {
      auth: 'openmusicv2app_jwt',
    },
  },
];

module.exports = routes;
