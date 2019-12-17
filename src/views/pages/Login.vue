<template>
  <CContainer class="d-flex align-items-center min-vh-100">
    <CRow class="justify-content-center">
      <CCol md="8">
        <CCardGroup>
          <CCard class="p-4">
            <CCardBody>
              <CForm>
                <h1>Login</h1>
                <p class="text-muted">Ingresa con tu cuenta</p>
                <CInput
                  placeholder="Correo electrónico"
                  autocomplete="username email" v-model="username"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="Contraseña"
                  type="password"
                  autocomplete="curent-password" v-model="password"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CRow>
                  <CCol col="6">
                    <CButton color="primary" class="px-4">Iniciar Sesión</CButton>
                  </CCol>
                  <CCol col="6" class="text-right">
                    <CButton color="link" class="px-0">Olvidaste tu contraseña?</CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
          <CCard
            color="primary"
            text-color="white"
            class="text-center py-5 d-md-down-none"
            style="width:44%"
            body-wrapper
          >
            <h2>Regístrate</h2>
            <p>Crea tu cuenta completando tus datos. Luego actívala ingresando el código SMS que te enviaremos a tu celular.</p>
            <CButton
              color="primary"
              class="active mt-3"
            >
              Regístrate Ahota!
            </CButton>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name: 'Login',
  data: {
    username: '',
    password: ''
  }
}
</script>
