const autodeploymentUrl = (path) => `//dev.api.telescope.cdot.systems:4000/${path}`;

const resMsg = document.getElementById('response-msg');
const buildHeaderInfo = document.getElementById('build-header-info');
const buildSender = document.getElementById('build-sender');
const buildSenderName = document.getElementById('build-sender-name');
const buildSenderImg = document.getElementById('build-sender-img');
const buildGitSHA = document.getElementById('build-git-sha');
const buildResult = document.getElementById('build-result');
const buildStarted = document.getElementById('build-started');
const buildDuration = document.getElementById('build-duration');

function renderBuildInfo({ githubData, startedDate, stopDate, code }) {
  resMsg.toggleAttribute('hidden');
  buildHeaderInfo.toggleAttribute('hidden');
  buildSender.setAttribute('href', githubData.sender.html_url);
  buildSenderName.innerText = githubData.sender.login;
  buildSenderImg.src = githubData.sender.avatar_url;
  buildGitSHA.setAttribute('href', githubData.compare);
  buildGitSHA.innerText = githubData.after.substring(0, 7);
  buildResult.innerText = code === 0 ? 'Good' : 'Error';
  buildStarted.innerText = new Date(startedDate).toUTCString();

  const duration = new Date(stopDate).getTime() - new Date(startedDate).getTime();
  const minutes = Math.floor(duration / 60000);
  const seconds = ((duration % 60000) / 1000).toFixed(0);
  buildDuration.innerText = `${minutes}m ${seconds}s`;
}

export default async function buildHeader() {
  try {
    const res = await fetch(autodeploymentUrl('status'));
    if (!res.ok) {
      const icon = document.createElement('i');
      icon.className = 'fas fa-server px-2';
      resMsg.innerHTML = '';
      resMsg.append(icon);
      resMsg.innerHTML += 'Unable to get build info.';

      throw new Error('Unable to get build info');
    }
    const { previous } = await res.json();
    renderBuildInfo(previous);
  } catch (err) {
    console.error(err);
  }
}
