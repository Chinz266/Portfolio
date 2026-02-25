// lib/github.ts
export async function getGithubRepos() {
  const username = 'Chinz266';
  
  // ดึงข้อมูล repo เรียงตามอัปเดตล่าสุด
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
    next: { revalidate: 3600 } 
  });
  
  if (!response.ok) {
    return [];
  }
  
  return response.json();
}