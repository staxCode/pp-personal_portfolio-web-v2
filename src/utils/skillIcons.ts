interface SkillInfo {
  icon: string
  color: string
}

const skillInfoMap: Record<string, SkillInfo> = {
  JavaScript:      { icon: 'simple-icons:javascript',      color: '#F7DF1E' },
  TypeScript:      { icon: 'simple-icons:typescript',      color: '#3178C6' },
  HTML:            { icon: 'simple-icons:html5',           color: '#E34F26' },
  CSS:             { icon: 'simple-icons:css3',            color: '#1572B6' },
  React:           { icon: 'simple-icons:react',           color: '#61DAFB' },
  'Tailwind CSS':  { icon: 'simple-icons:tailwindcss',     color: '#06B6D4' },
  Bootstrap:       { icon: 'simple-icons:bootstrap',       color: '#7952B3' },
  Astro:           { icon: 'simple-icons:astro',           color: '#BC52EE' },
  'Next.js':       { icon: 'simple-icons:nextdotjs',       color: '#000000' },
  Sass:            { icon: 'simple-icons:sass',            color: '#CC6699' },
  'Node.js':       { icon: 'simple-icons:nodedotjs',       color: '#339933' },
  'Express.js':    { icon: 'simple-icons:express',         color: '#000000' },
  MongoDB:         { icon: 'simple-icons:mongodb',          color: '#47A248' },
  PostgreSQL:      { icon: 'simple-icons:postgresql',       color: '#4169E1' },
  MySQL:           { icon: 'simple-icons:mysql',            color: '#4479A1' },
  NestJS:          { icon: 'simple-icons:nestjs',           color: '#E0234E' },
  Prisma:          { icon: 'simple-icons:prisma',           color: '#2D3748' },
  Redis:           { icon: 'simple-icons:redis',            color: '#DC382D' },
  GraphQL:         { icon: 'simple-icons:graphql',          color: '#E10098' },
  Apollo:          { icon: 'simple-icons:apollographql',    color: '#311C87' },
  'Socket.io':     { icon: 'simple-icons:socketdotio',     color: '#010101' },
  RabbitMQ:        { icon: 'simple-icons:rabbitmq',         color: '#FF6600' },
  Docker:          { icon: 'simple-icons:docker',           color: '#2496ED' },
  Kubernetes:      { icon: 'simple-icons:kubernetes',       color: '#326CE5' },
  AWS:             { icon: 'simple-icons:amazonwebservices',color: '#FF9900' },
  Terraform:       { icon: 'simple-icons:terraform',        color: '#7B42BC' },
  'GitHub Actions':{ icon: 'simple-icons:githubactions',   color: '#2088FF' },
  'GitLab CI':     { icon: 'simple-icons:gitlab',           color: '#FC6D27' },
  Jenkins:         { icon: 'simple-icons:jenkins',          color: '#D24939' },
  Ansible:         { icon: 'simple-icons:ansible',          color: '#EE0000' },
  Nginx:           { icon: 'simple-icons:nginx',            color: '#009639' },
  Apache:          { icon: 'simple-icons:apache',           color: '#D22128' },
  Linux:           { icon: 'simple-icons:linux',            color: '#FCC624' },
  Bash:            { icon: 'simple-icons:gnubash',          color: '#4EAA25' },
  Prometheus:      { icon: 'simple-icons:prometheus',       color: '#E6522C' },
  Grafana:         { icon: 'simple-icons:grafana',          color: '#F46800' },
  Git:             { icon: 'simple-icons:git',              color: '#F05032' },
  GitHub:          { icon: 'simple-icons:github',           color: '#181717' },
  GitLab:          { icon: 'simple-icons:gitlab',           color: '#FC6D27' },
  Bitbucket:       { icon: 'simple-icons:bitbucket',        color: '#0052CC' },
  Postman:         { icon: 'simple-icons:postman',          color: '#FF6C37' },
  Insomnia:        { icon: 'simple-icons:insomnia',         color: '#4000BF' },
  Figma:           { icon: 'simple-icons:figma',            color: '#F24E1E' },
  Trello:          { icon: 'simple-icons:trello',           color: '#0052CC' },
  Jira:            { icon: 'simple-icons:jira',             color: '#0052CC' },
  Slack:           { icon: 'simple-icons:slack',            color: '#4A154B' },
  Discord:         { icon: 'simple-icons:discord',          color: '#5865F2' },
  Swagger:         { icon: 'simple-icons:swagger',          color: '#85EA2D' },
}

const defaultSkill: SkillInfo = { icon: 'lucide:eye', color: '#6B7280' }

export function getSkillIcon(skill: string): string {
  return (skillInfoMap[skill] ?? defaultSkill).icon
}

export function getSkillColor(skill: string): string {
  return (skillInfoMap[skill] ?? defaultSkill).color
}
