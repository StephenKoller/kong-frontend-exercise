<template>
  <nav>
    <div class="left">
      <router-link to="/">
        <img
          alt="Kong Konnect logo"
          src="/public/logo-konnect.svg"
        >
      </router-link>
    </div>

    <div class="right">
      <a
        class="organization"
        href="#"
      >
        <img
          alt="people icon"
          src="/public/icon-people.svg"
        >
        Organization</a>
      <a
        class="settings"
        href="#"
      >
        <img
          alt="gear icon"
          src="/public/icon-cog.svg"
        >
        Settings</a>
      <a
        class="userMenu"
        href="#"
      >
        <img
          alt="person icon"
          src="/public/icon-avatar.svg"
        >
        Katherine Ellis</a>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
nav {
    align-items: center;

    background: linear-gradient(180deg, #09224F 0%, #073382 100%);
    border-bottom: 1px solid #333;

    display: flex;
    flex-direction: row;
    height: 70px;
    justify-content: space-between;

}

.right {

    display: flex;
    flex-direction: row;
    /* need this set to 100% to allow child to take up full height for bg color */
    height: 100%;
    justify-content: space-between;

    a {
        align-items: center;
        color: #FFFFFF;
        display: flex;
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;
        margin: 0 16px;
        opacity: 0.8;
        text-decoration: none;

        &:hover {
            opacity: 1;
        }

        &:last-of-type {
            margin-right: 0;
        }
    }

    img {
        margin-right: 12px;
    }


    .userMenu {
        background-color: #072863;
        height: 100%;
        padding: 0 20px;
    }
}



</style>
