<template>
  <CContainer class="min-vh-100 d-flex align-items-center">
    <CRow class="w-100 justify-content-center">
      <CCol md="6" sm="8">
        <CCard class="mx-4 mb-0">
          <CCardBody class="p-4">
            <CForm>
              <h1>Regístrate</h1>
              <p class="text-muted">Crea una cuenta</p>
              <CInput
                placeholder="Nombre de Usuario"
                autocomplete="username"
              >
                <template #prepend-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                placeholder="Correo Electrónico"
                autocomplete="email"
                prepend="@"
              />
              <CInput
                placeholder="Contraseña"
                type="password"
                autocomplete="new-password"
              >
                <template #prepend-content><CIcon name="cil-lock-locked"/></template>
              </CInput>
              <CInput
                placeholder="Repetir Contraseña"
                type="password"
                autocomplete="new-password"
                class="mb-4"
              >
                <template #prepend-content><CIcon name="cil-lock-locked"/></template>
              </CInput>
              <CButton color="success" block>Crear Cuenta</CButton>
            </CForm>
          </CCardBody>
          <CCardFooter class="p-4">
            <CRow>
              <CCol col="6">
                <CButton block color="facebook">
                  Facebook
                </CButton>
              </CCol>
              <CCol col="6">
                <CButton block color="twitter">
                  Twitter
                </CButton>
              </CCol>
            </CRow>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name: 'Register'
}
</script>
