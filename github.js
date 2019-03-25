class Github {
  constructor() {
    this.client_id = "d06d471eae60610211c1";
    this.client_secret = "5fd58d2868a4a2079ed7e88dbca888e888b53d99";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    return {
      profile
    };
  }
}
