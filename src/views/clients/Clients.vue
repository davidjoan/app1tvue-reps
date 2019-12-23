<template>
  <CRow>
    <CCol col="12" xl="8">
      <transition name="slide">
        <CCard>
          <CCardHeader>
            Clientes
          </CCardHeader>
          <CCardBody v-if="items">
            <CDataTable
              hover
              striped
              :items="items"
              :fields="fields"
              :items-per-page="perPage"
              @row-clicked="rowClicked"
              :pagination="$options.paginationProps"
              index-column
              clickable-rows
            >
              <template #client_name="data">
                <td>
                  <strong>{{data.item.client_name}}</strong>
                </td>
              </template>
            
              <template #brick="data">
                <td>
                  <CBadge :color="success">
                    {{data.item.brick}}
                  </CBadge>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CCard>
      </transition>
    </CCol>
  </CRow>
</template>

<script>
import { mapActions, mapState } from "vuex";
import api from "../../store/api";

export default {
  name: 'Clients',
  data: () => {
    return {
      items: [],
      fields: [
        { key: 'client_name', label: 'Cliente' },
        { key: 'address', label: 'Dirección' },
        { key: 'district', label: 'Distrito' },
        { key: 'brick', label: 'Brick' }
      ],
      perPage: 10,
    }
  },
  paginationProps: {
    align: 'center',
    doubleArrows: false,
    previousButtonHtml: 'prev',
    nextButtonHtml: 'next'
  },
  mounted () {
    let self = this;
    this.getTarget().then(function (response) {
      console.log('paso');
      console.log(response);
      console.log(response.data.data);
      self.items = response.data.data;
      
    });
  },
  computed: {
    ...mapState('auth', ['target']),
    ...mapState('auth', ['organization_selected'])
    },
  methods: {
    ...mapActions('auth', ['getTarget']),
    userLink (id) {
      return `users/${id.toString()}`
    },
    rowClicked (item, index) {
      const userLink = this.userLink(index + 1)
      this.$router.push({path: userLink})
    },
    fetchData(){
         api.get(`target/${this.organization_selected.id}`)
        .then(function(response) {
          //commit('setTarget', response.data.data);
          this.items =  response.data.data;
        })
        .catch(function(error) {
          return error;
        });
    }
  }
}
</script>