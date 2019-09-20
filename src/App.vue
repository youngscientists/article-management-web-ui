<template>
  <div id="app">
    <completion-helper />
    <notifications />
    <fade-transition :duration="200" origin="center top" mode="out-in">
      <router-view />
    </fade-transition>
  </div>
</template>
