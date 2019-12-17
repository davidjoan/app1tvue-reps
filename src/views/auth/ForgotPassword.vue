<template>
  <CContainer class="min-vh-100 d-flex align-items-center">
    <CRow class="w-100 justify-content-center">
      <CCol md="6" sm="8">
        <CCard class="mx-4 mb-0">
          <CCardBody class="p-4">
            <CForm>
              <h1>Olvidaste tu contraseña</h1>
              <p class="text-muted">Ingresa tu correo electrónico y recibiras un correo de recuperación</p>
              <CInput
                placeholder="Correo Electrónico"
                autocomplete="email"
                prepend="@"
              />
              <CButton color="success" block>Recuperar Contraseña</CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name: 'ForgotPassword'
}
</script>
