<template>
  <div>
    <div class="bg-white flex p-4 space-x-6 border-b">
      <div class="flex">
        <h1 class="text-xl font-bold my-auto">SELLER MONIT</h1>
      </div>
      <NavBar>
        <NavButton label="Team" href="#" :active="true" />
        <NavButton label="Agenda" href="#" />
        <NavButton label="Roadmap" href="#" />
      </NavBar>
    </div>
    <div class="p-4">
      <Card>
        <div class="flex justify-between">
          <InputDefaultSelect>
            <InputOption value="1" label="Team 1"></InputOption>
            <InputOption value="2" label="Team 2"></InputOption>
            <InputOption value="3" label="Team 3"></InputOption>
          </InputDefaultSelect>
          <div class="flex space-x-4">
            <InputGroup>
              <InputDefaultButton :icon="['fas', 'arrow-left']" /> 
              <InputDefaultSelect>
                <InputOption value="1" label="Semaine 1"></InputOption>
                <InputOption value="2" label="Semaine 2"></InputOption>
                <InputOption value="3" label="Semaine 3"></InputOption>
              </InputDefaultSelect>
              <InputDefaultButton :icon="['fas', 'arrow-right']" /> 
            </InputGroup>
            <InputDefaultSelect>
              <InputOption value="2024" label="2024"></InputOption>
            </InputDefaultSelect>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>
