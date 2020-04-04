<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column">
          <section class="hero is-info welcome is-small">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  Hello, Admin.
                </h1>
                <h2 class="subtitle">
                  I hope you are having a great day!
                </h2>
              </div>
            </div>
          </section>
          <!--  -->
          <div class="columns">
            <div class="column">
              <!--  -->
              <div class="card events-card">
                <header class="card-header">
                  <p class="card-header-title">
                    User list
                  </p>
                  <a
                    href="#"
                    class="card-header-icon"
                    aria-label="more options"
                  >
                    <span class="icon">
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div class="card-table">
                  <div class="content">
                    <div class="list">
                      <UserListItem
                        v-for="(user, i) in userList"
                        :key="`${user.phone}_${i}`"
                        :user="user"
                        class="list-item"
                      />
                    </div>
                  </div>
                </div>
                <!--  -->
                <footer class="card-footer">
                  <a href="#" class="card-footer-item">todo pagination </a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserListItem from './components/user-list-item.vue';
import { getState, setState } from './base-process';
import { IState } from './types/state-types';

const components = {
  UserListItem,
};

@Component({
  components,
})
export default class AppComponent extends Vue {
  state!: IState;

  async mounted() {
    this.$act.addAction(setState.name, setState);
    this.$act.addAction(getState.name, getState);

    this.state = await this.$act.exec(getState.name);
  }
}
</script>
