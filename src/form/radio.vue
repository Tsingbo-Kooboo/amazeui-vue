<template>
  <div class="am-form-group">
    <label class="am-radio-inline"
           :key="index"
           v-for="(item, index) in items">
      <input type="radio"
             :name="name"
             :value="item.value"
             v-model="model"> {{ item.label }}
    </label>
  </div>
</template>

<script>

module.exports = {

  props: {
    "name": {
      type: String,
      required: true
    },
    "items": {
      type: Array,
      required: true
    },
    "model": {
      type: String,
      twoWay: true,
      default: '',
      required: false
    }
  }

};

</script>
