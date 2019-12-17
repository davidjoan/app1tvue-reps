<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img v-bind:src="'img/avatars/' + $store.state.user.id + '.jpg'"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Cuenta</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-bell"/> Actualizaciones
      <CBadge color="info" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-envelope-open" /> Mensajes
      <CBadge color="success" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-task" /> Tareas
      <CBadge color="danger" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-comment-square" /> Comentarios
      <CBadge color="warning" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownHeader
      tag="div"
      class="text-center"
      color="light"
    >
      <strong>Ajustes</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-user" /> Perfil
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-settings" /> Configuraciones
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-dollar" /> Pagos
      <CBadge color="secondary" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-file" /> Proyectos
      <CBadge color="primary" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem>
      <CIcon name="cil-shield-alt" /> Bloquear cuenta
    </CDropdownItem>
    <CDropdownItem v-on:click="logout" >
      <CIcon name="cil-lock-locked" /> Cerrar Sesión
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42
    }
  },
  methods:{
    logout () {
      let self = this;
      self.$store.state.services.authService.logout();
      self.$router.push({ name: 'Login'})      
    }
  }
  
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>