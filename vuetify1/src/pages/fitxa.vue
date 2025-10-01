<template>
  <v-container>
    <v-card color="blue">
      <v-row class="ma-1 pa-5">
        <v-col col="6">
          <v-img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1730029690~exp=1730033290~hmac=d3ebc9f71b5615696033dbe93fdc70c240fab2b9e9512971be97ae787655a2b6&w=826"
          />
          <h1 class="text-center">{{ companyia }}</h1>
        </v-col>
        <v-col class="d-flex flex-column justify-center align-center" col="6">
          <div class="d-flex pt-4">
            <h1>Pepe Gutierrez</h1>
          </div>
          <div class="d-flex pt-4">
            <v-icon>mdi-phone</v-icon>
            <p>{{ tel }}</p>
          </div>
          <div class="d-flex pt-4">
            <v-icon>mdi-mail</v-icon>
            <p>{{ mail }}</p>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
