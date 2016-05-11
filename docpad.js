module.exports = {

  // -- Basic information ----------------------------------------------------
  templateData: {

    // Production
    site: {
      name: "Campeonato Brasileiro Long Casting 2015",
      description: "Campeonato Brasileiro de Long Casting 2015.",
      url: "http://longcastingbrasil.com.br"

        //url: "http://localhost:9778"
    }

  },

  // -- Collections ------------------------------------------------------------
  collections: {

    // Get all projects sorted by date order
    regulamentos: function() {
      var documents = this.getCollection("documents");
      var sortByAscendingDate = [{ date: -1 }];

      return documents.findAll({
        url: {
          $startsWith: '/regras'
        },
        layout: 'historia',
      }, sortByAscendingDate);
    },

    // Get all projects sorted by date order
    informacoes: function() {
      var documents = this.getCollection("documents");
      var sortByAscendingDate = [{ date: -1 }];

      return documents.findAll({
        url: {
          $startsWith: '/informacoes'
        },
        layout: 'historia',
      }, sortByAscendingDate);
    },

    // Get all projects sorted by date order
    oesporte: function() {
      var documents = this.getCollection("documents");
      var sortByAscendingDate = [{ date: -1 }];

      return documents.findAll({
        url: {
          $startsWith: '/oesporte'
        },
        layout: 'historia',
      }, sortByAscendingDate);
    }

  },

  // -- Environments -----------------------------------------------------------
  environments: {

    // Development
    development: {
      templateData: {
        site: {
          url: "http://longcastingbrasil.com.br"
             // url: "http://localhost:9778"
        }
      }
    }

  },

  // -- Plugins ----------------------------------------------------------------
  plugins: {
    moment: {
      formats: [
        { raw: 'date', format: 'D', formatted: 'day' },
        { raw: 'date', format: 'MMM', formatted: 'month' }
      ]
    }
  }

};
