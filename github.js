class Github {
  constructor() {
    this.client_id = "Iv1.5f5651d3a34e2da8";
    this.client_secret = "f6afffec6958e4edda7f2f0c706f5c40bf39d01a";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    const ProfileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await ProfileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos,
    };
  }
}
