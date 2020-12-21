<template>
  <card class="card-user">
    <div slot="image" class="image">
      <img src="/img/bg5.jpg" alt="..." />
    </div>
    <div>
      <div class="author">
        <a href="#">
          <img class="avatar border-gray" src="/img/mike.jpg" alt="..." />
          <h5 class="title">Mike Andrew</h5>
        </a>
        <p class="description">michael24</p>
      </div>
      <p class="description text-center">
        "Lamborghini Mercy <br />
        Your chick she so thirsty <br />
        I'm in that two seat Lambo"
      </p>
    </div>
    <div slot="footer" class="button-container">
      <n-button href="#" type="neutral" icon round size="lg">
        <i class="fab fa-facebook-square"></i>
      </n-button>
      <n-button href="#" type="neutral" icon round size="lg">
        <i class="fab fa-twitter"></i>
      </n-button>
      <n-button href="#" type="neutral" icon round size="lg">
        <i class="fab fa-google-plus-square"></i>
      </n-button>
    </div>
  </card>
</template>
<script>
export default {};
</script>
<style>
</style>
