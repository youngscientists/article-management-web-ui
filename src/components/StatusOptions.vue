<template>
  <select class="statusvalues" name="statusvalues" value="{this.props.selected}">
    <option value="In Review">In Review</option>
    <option value="Failed Data Check">Failed Data Check</option>
    <option value="Passed Data Check">Passed Data Check</option>
    <option value="Technical Review">Technical Review</option>
    <option value="Revisions Requested">Revisions Requested</option>
    <option value="Ready to Publish">Ready to Publish</option>
    <option value="Published">Published</option>
  </select>
</template>

<script>
export default {
  name: "StatusOptions"
};
</script>

<style>
</style>
