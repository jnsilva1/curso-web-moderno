<template>
  <footer class="footer">
    <span>Copyright <strong>Cod3r & José Silva</strong> &copy; 2015-2018  </span>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
.footer {
  grid-area: footer;
  background-color: #ddd;
  color: #333;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-right: 10px;
}
</style>
