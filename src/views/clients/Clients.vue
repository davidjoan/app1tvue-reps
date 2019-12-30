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
                <CInput
                  class="mr-sm-2"
                  placeholder="Buscar"
                  size="sm"
                  v-model="filter"
                />
                <CButton
                  color="outline-success"
                  class="my-2 my-sm-0"
                  type="button"
                  v-on:click="searchMethod"
                  >Buscar</CButton
                >
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
              clickable-rows
            >
              <template #photo="data">
                <td class="text-center">
                  <div class="c-avatar">
                    <img
                      :src="getPhoto(data.item.client_code)"
                      class="c-avatar-img"
                      :alt="data.item.client_code"
                    />
                    <span
                      class="c-avatar-status"
                      :class="data.item.status_color"
                    ></span>
                  </div>
                </td>
              </template>

              <template #client_name="data">
                <td>
                  <div><strong>{{ data.item.client_name }}</strong></div>
                <div class="small text-muted">
                  <span>
                    <template>Categoría:{{ data.item.category }}</template>
                  </span> | Registrado: {{data.item.created_at}}
                </div>
                </td>
              </template>

              <template #address="data">
                <td>
                  {{ data.item.address }} - {{ data.item.district}}
                </td>
              </template>

              <template #brick_code="data">
                  <td>
                  <div>{{ data.item.brick_code }}</div>
                <div class="small text-muted">
                  {{data.item.brick}}
                </div>
                </td>
              </template>

              <template #type_icon="data">
              <td
                class="text-center">
                <CIcon
                  :name="data.item.type_icon"
                  :alt="data.item.type"
                  height="15"
                />
              </td>
              </template>

              <template #flag="data">
                <td class="text-center">
                  <CIcon :name="data.item.flag" height="15" :alt="data.item.country" />
                </td>
              </template>

              <template #status_color="data">
                <td>
                  <CBadge :color="data.item.status_color">
                    {{ data.item.status }}
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
        { key: "photo", label: "", sortable: false },
        { key: "client_name", label: "Cliente", sortable: true },
        { key: "address", label: "Dirección", sortable: true },
        { key: "brick_code", label: "Brick", sortable: true },
        { key: "flag", label: "Pais", sortable: true },
        { key: "type_icon", label: "Tipo", sortable: true },
        { key: "status_color", label: "Estado", sortable: false }
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
    ...mapState("auth", ["target_filter"])
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
    getPhoto(code) {
      return `${process.env.VUE_APP_API_URL}/api/v1/target/client_avatar/${code}`;
    },
    searchMethod() {
      this.setFilter(this.filter);
      let self = this;
      this.getTarget().then(function(response) {
        self.items = response.data.data;
      });
    }
  }
};
</script>
