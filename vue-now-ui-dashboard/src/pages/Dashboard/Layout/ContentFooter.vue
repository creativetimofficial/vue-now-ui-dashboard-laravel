<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul class="footer-menu">
          <li>
            <a
              href="https://www.creative-tim.com"
              target="_blank"
              rel="noopener"
              >CREATIVE TIM</a
            >
          </li>
          <li class="nav-item">
            <a href="https://www.updivision.com/" target="_blank" rel="noopener"
              >UPDIVISION</a
            >
          </li>
          <li class="nav-item">
            <a
              href="https://www.creative-tim.com/presentation"
              target="_blank"
              rel="noopener"
              >ABOUT US</a
            >
          </li>
          <li class="nav-item">
            <a
              href="http://blog.creative-tim.com"
              target="_blank"
              rel="noopener"
              >BLOG</a
            >
          </li>
          <li class="nav-item">
            <a
              href="https://www.creative-tim.com/license"
              target="_blank"
              rel="noopener"
              >LICENSES</a
            >
          </li>
        </ul>
      </nav>
      <div>
        <div class="copyright">
          © {{ year }}, made with <i class="fa fa-heart heart"></i> by<a
            href="https://www.creative-tim.com"
            class="font-weight-bold ml-1"
            target="_blank"
            rel="noopener"
            >Creative Tim</a
          >
          and<a
            href="https://www.updivision.com"
            class="font-weight-bold ml-1"
            target="_blank"
            rel="noopener"
            >UPDIVISION</a
          >
          for a better web.
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
