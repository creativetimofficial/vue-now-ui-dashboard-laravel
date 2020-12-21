<template>
  <card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <form>
      <div class="row">
        <div class="col-md-5">
          <fg-input type="text"
                    label="Company"
                    :disabled="true"
                    placeholder="Paper dashboard"
                    v-model="user.company">
          </fg-input>
        </div>
        <div class="col-md-3">

          <fg-input type="text"
                    label="Username"
                    placeholder="Username"
                    v-model="user.username">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="email"
                    label="Username"
                    placeholder="Email"
                    v-model="user.email">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    label="First Name"
                    placeholder="First Name"
                    v-model="user.firstName">
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="text"
                    label="Last Name"
                    placeholder="Last Name"
                    v-model="user.lastName">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <fg-input type="text"
                    label="Address"
                    placeholder="Home Address"
                    v-model="user.address">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="City"
                    placeholder="City"
                    v-model="user.city">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Country"
                    placeholder="Country"
                    v-model="user.country">
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input label="Postal Code"
                    placeholder="ZIP Code"
                    v-model="user.postalCode">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <fg-input label="About Me">
            <textarea class="form-control"
                      placeholder="ZIP Code"
                      v-model="user.aboutMe">
            </textarea>
          </fg-input>
        </div>
      </div>
    </form>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        company: 'Creative Code Inc.',
        username: 'michael23',
        email: '',
        firstName: 'Mike',
        lastName: 'Andrew',
        address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        city: '',
        postalCode: '',
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style>
</style>
