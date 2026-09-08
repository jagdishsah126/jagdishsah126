export interface Repo {
  name: string;
  description: string;
  language: string;
  url: string;
  liveUrl?: string;
}

export interface GitHubProfile {
  username: string;
  displayName: string;
  bio: string;
  repoCount: number;
  url: string;
  avatarUrl: string;
  repos: Repo[];
}

export const githubProfiles: GitHubProfile[] = [
  {
    username: '[Data to be Inserted: Username 1]',
    displayName: '[Data to be Inserted: Display Name 1]',
    bio: '[Data to be Inserted: Brief bio describing the focus of this GitHub account]',
    repoCount: 0,
    url: 'https://github.com',
    avatarUrl: '',
    repos: [
      {
        name: '[Data to be Inserted: Repository Name 1]',
        description: '[Data to be Inserted: Repository description]',
        language: '[Data to be Inserted: Language]',
        url: 'https://github.com',
        liveUrl: 'https://example.com',
      },
      {
        name: '[Data to be Inserted: Repository Name 2]',
        description: '[Data to be Inserted: Repository description]',
        language: '[Data to be Inserted: Language]',
        url: 'https://github.com',
      },
    ],
  },
  {
    username: '[Data to be Inserted: Username 2]',
    displayName: '[Data to be Inserted: Display Name 2]',
    bio: '[Data to be Inserted: Brief bio for second profile or organization]',
    repoCount: 0,
    url: 'https://github.com',
    avatarUrl: '',
    repos: [
      {
        name: '[Data to be Inserted: Repository Name]',
        description: '[Data to be Inserted: Repository description]',
        language: '[Data to be Inserted: Language]',
        url: 'https://github.com',
      },
    ],
  },
];
