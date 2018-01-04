<template>
  <div id="content" class="content-wrapper">
      <section class="content-header">
        <h1>
          全部成功的单
          <small></small>
        </h1>
        <ol class="breadcrumb">
          <li>
            <router-link to="/"><i class="glyphicon glyphicon-home"></i> 主页</router-link>
          </li>
          <li class="active">全部成功的单</li>
        </ol>
      </section>
    <section class="content">
      <div class="box">
        <div class="box-header"></div>
        <div class="box-body">
          <vue-bootstrap-table
            :columns="columns"
            :pager="pager"
            :values="values"
            :show-filter="showFilter"
            :show-column-picker="showPicker"
            :paginated="paginated"
            :multi-column-sortable="multiColumnSortable"
            :ajax="ajax"
          >
          </vue-bootstrap-table>
        </div>
        <div class="box-footer"></div>
      </div>
    </section>
    </div>
</template>

<script>
  import VueBootstrapTable from 'vue2-bootstrap-table2'
    export default {
      components: {
        VueBootstrapTable: VueBootstrapTable
      },
      data(){
        return{
          pager: {
            page_no: 1,
            page_size: 10,
            sort_name: null,
            is_desc: false,
          },
            logging: [],
            showFilter: true,
            showPicker: true,
            paginated: true,
            multiColumnSortable: true,
            ajax: {
              enabled: false,
              url: "http://localhost:9430/data/test",
              method: "POST",
              delegate: true,
            },
            columns: [
              {
                title:"id",
                visible: true,
                editable: false,
              },
              {
                title:"Name",
                name: "name",
                visible: true,
                editable: true,
              },
              {
                title:"Age",
                name: "age",
                visible: true,
                editable: true,
              },
              {
                title:"Country",
                name: "country",
                visible: true,
                editable: true,
              }
            ],
            values: [
              {
                "id": 1,
                "name": "John",
                "country": "UK",
                "age": 25,
              },
              {
                "id": 2,
                "name": "Mary",
                "country": "France",
                "age": 30,
              },
              {
                "id": 3,
                "name": "Ana",
                "country": "Portugal",
                "age": 20,
              },
              {
                "id": 3,
                "name": "Ana",
                "country": "Portugal",
                "age": 20,
              },
              {
                "id": 3,
                "name": "Ana",
                "country": "Portugal",
                "age": 20,
              },
              {
                "id": 3,
                "name": "Ana",
                "country": "Portugal",
                "age": 20,
              }, {
                "id": 3,
                "name": "Ana",
                "country": "Portugal",
                "age": 20,
              },
              {
                "id": 3,
                "name": "Ana",
                "country": "Portugal",
                "age": 20,
              }, {
                "id": 3,
                "name": "Ana",
                "country": "Portugal",
                "age": 20,
              },
              {
                "id": 3,
                "name": "Ana",
                "country": "Portugal",
                "age": 20,
              },
              {
                "id": 3,
                "name": "Ana",
                "country": "Portugal",
                "age": 20,
              },
              {
                "id": 3,
                "name": "Ana",
                "country": "Portugal",
                "age": 20,
              },
              {
                "id": 3,
                "name": "Ana",
                "country": "Portugal",
                "age": 20,
              },
              {
                "id": 3,
                "name": "Ana",
                "country": "Portugal",
                "age": 20,
              },
              {
                "id": 3,
                "name": "Ana",
                "country": "Portugal",
                "age": 20,
              },
              {
                "id": 3,
                "name": "Ana",
                "country": "Portugal",
                "age": 20,
              }


            ]
          }
      },
      created: function () {
        var self = this;
        this.$on('cellDataModifiedEvent',
          function( originalValue, newValue, columnTitle, entry) {
            self.logging.push("cellDataModifiedEvent - Original Value : " + originalValue +
              " | New Value : " + newValue +
              " | Column : " + columnTitle +
              " | Complete Entry : " +  entry );
          }
        );
        this.$on('ajaxLoadedEvent',
          function( data ) {
            this.logging.push("ajaxLoadedEvent - data : " + data );
          }
        );
        this.$on('ajaxLoadingError',
          function( error ) {
            this.logging.push("ajaxLoadingError - error : " + error );
          }
        );
      },
      methods: {
        addItem: function() {
          var self = this;
          var item = {
            "id" : this.values.length + 1,
            "name": "name " + (this.values.length+1),
            "country": "Portugal",
            "age": 26,
          };
          this.values.push(item);
        }
      }
    }
</script>
