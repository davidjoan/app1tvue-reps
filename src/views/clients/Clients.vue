<template>
  <CRow>
    <CCol col="sm" xl="12">
      <transition name="slide">
        <CCard>
          <CCardHeader>
            Clientes
          </CCardHeader>
          <CCardBody v-if="items">
            <CNavbar light color="light">
              <CForm inline>
                <CInput class="mr-sm-2" placeholder="Buscar" size="sm" v-model="filter" />
                <CButton
                  color="outline-success"
                  class="my-2 my-sm-0"
                  type="button"
                  v-on:click="searchMethod"
                  >Buscar</CButton>
              </CForm>
            </CNavbar>
            <CDataTable
              hover
              striped
              :items="items"
              :fields="fields"
              :items-per-page="perPage"
              @row-clicked="rowClicked"
              :pagination="$options.paginationProps"
              index-column
              clickable-rows>
              <template #client_name="data">
                <td>
                  <strong>{{ data.item.client_name }}</strong>
                </td>
              </template>

              <template #brick="data">
                <td>
                  <CBadge :color="getBadge()">
                    {{ data.item.brick }}
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
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "Clients",
  data: () => {
    return {
      items: [],
      filter: "",
      fields: [
        { key: "client_name", label: "Cliente", sortable: true },
        { key: "address", label: "Dirección", sortable: true },
        { key: "district", label: "Distrito", sortable: true },
        { key: "brick", label: "Brick", sortable: true }
      ],
      perPage: 20
    };
  },
  paginationProps: {
    align: "center",
    doubleArrows: false,
    previousButtonHtml: "prev",
    nextButtonHtml: "next"
  },
  mounted() {
    let self = this;
    this.getTarget().then(function(response) {
      self.items = response.data.data;
    });
  },
  computed: {
    ...mapState("auth", ["target_filter"]),
  },
  methods: {
    ...mapMutations("auth", ["setFilter"]),
    ...mapActions("auth", ["getTarget"]),
    userLink(id) {
      return `/clients/${id.toString()}`;
    },
    rowClicked(item, index) {
      const userLink = this.userLink(index + 1);
      this.$router.push({ path: userLink });
    },
    getBadge() {
      return "secondary";
    },
    searchMethod(){
      this.setFilter(this.filter);
      let self = this;
      this.getTarget().then(function(response) {
        self.items = response.data.data;
      });
    }
  }
};
</script>
