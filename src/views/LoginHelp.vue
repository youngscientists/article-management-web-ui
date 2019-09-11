<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div
        v-theme="{background: 'primaryBg', shadow: true}"
        class="card border-0"
      >
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <h1 v-theme="{color: 'primary'}">
              Help
            </h1>
          </div>
          <div v-theme="{color: 'primaryFont'}">
            Welcome to the
            <a
              v-theme="{color: 'link'}"
              href="https://ysjournal.com"
              target="_blank"
            >Young Scientists Journal</a> article management system.
            To gain access, you must be registered with the journal as an editor.
            If you are not an editor and wish to become one, please send an email to: chief.editor@ysjournal.com
            <br>
            <br>If you are already an editor but your email is not recognized, notify the production team immediately on the #productionheros
            <a
              v-theme="{color: 'link'}"
              href="https://ysjournal.slack.com"
              target="_blank"
            >Slack</a> channel.
          </div>
          <div class="text-center mt-1">
            <base-button
              type="primary"
              class="my-4"
              @click="$router.push({name: 'login'})"
            >
              Go Back
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.row
  z-index: 100000 !important
</style>