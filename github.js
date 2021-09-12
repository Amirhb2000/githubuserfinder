class Github {
  constructor() {
    this.client_id = "Iv1.5f5651d3a34e2da8";
    this.client_secret = "f6afffec6958e4edda7f2f0c706f5c40bf39d01a";
  }
  async getUser(user) {
    const ProfileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await ProfileResponse.json();

    return {
      profile,
    };
  }
}
