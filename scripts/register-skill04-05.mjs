import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=process.cwd(), registryPath=path.join(root,'docs/planning/artifact-lifecycle-registry-v1.json');
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex').toUpperCase();
const rel=p=>path.relative(root,p).replaceAll('\\','/');
const files=[
  ['imports/raw-content/current','CURRENT','Skill04','Project-local current raw-content working copy'],
  ['imports/raw-content/raw-content-intake-manifest-v1.md','CURRENT','Skill04','Raw intake evidence'],
  ['content-prep/prepared-content/media-manifest.json','REQUIRED_HANDOFF','Skill04','Prepared media contract'],
  ['content-prep/time-generation-report-v1.md','REQUIRED_HANDOFF','Skill04','Time generation evidence'],
  ['content-prep/time-generation-summary-v1.json','REQUIRED_HANDOFF','Skill04','Time generation summary'],
  ['docs/planning/content-seo-geo-naming-package-report-v1.md','REQUIRED_HANDOFF','Skill04','SEO/GEO preparation report'],
  ['docs/planning/04-skill-output-manifest-v1.json','REQUIRED_HANDOFF','Skill04','Skill 04 output manifest'],
  ['docs/planning/skill04-contact-sheet-v1.png','CURRENT','Skill04','Single media contact sheet'],
  ['docs/planning/skill04-media-review-summary-v1.md','CURRENT','Skill04','Media review summary'],
  ['docs/planning/skill04-cleanup-report-skill04-initial-content-preparation-2026-08-07-refashion-lab.json','CURRENT','Skill04','Skill 04 cleanup report'],
  ['content-prep/packages/refashion-lab-content-package-skill05-initial-content-package-2026-08-07-refashion-lab.zip','REQUIRED_HANDOFF','Skill05','Admin import ZIP'],
  ['content-prep/packages/package-file-manifest-skill05-initial-content-package-2026-08-07-refashion-lab.json','REQUIRED_HANDOFF','Skill05','Normalized package file manifest'],
  ['content-prep/packages/package-manifest-skill05-initial-content-package-2026-08-07-refashion-lab.json','REQUIRED_HANDOFF','Skill05','Package identity manifest'],
  ['content-prep/packages/approved-slugs-skill05-initial-content-package-2026-08-07-refashion-lab.json','REQUIRED_HANDOFF','Skill05','Approved slug manifest'],
  ['content-prep/packages/category-map-skill05-initial-content-package-2026-08-07-refashion-lab.json','REQUIRED_HANDOFF','Skill05','Category map'],
  ['content-prep/packages/media-manifest-skill05-initial-content-package-2026-08-07-refashion-lab.json','REQUIRED_HANDOFF','Skill05','Packaged media manifest'],
  ['content-prep/package-report-skill05-initial-content-package-2026-08-07-refashion-lab.md','CURRENT','Skill05','Package report'],
  ['docs/planning/05-skill-output-manifest-skill05-initial-content-package-2026-08-07-refashion-lab.json','REQUIRED_HANDOFF','Skill05','Skill 05 output manifest'],
  ['docs/planning/skill05-cleanup-report-skill05-initial-content-package-2026-08-07-refashion-lab.json','CURRENT','Skill05','Skill 05 cleanup report'],
  ['docs/planning/orchestrator-handoff-05-skill05-initial-content-package-2026-08-07-refashion-lab.json','REQUIRED_HANDOFF','Skill05','Skill 05 handoff']
];
const reg=JSON.parse(fs.readFileSync(registryPath,'utf8').replace(/^\uFEFF/,'')); reg.latest_run_id='skill05-initial-content-package-2026-08-07-refashion-lab'; reg.runs ||= [];
reg.runs.push({run_id:'skill04-initial-content-preparation-2026-08-07-refashion-lab',skill_id:'04',final_status:'PASS_READY_FOR_SKILL_05',downstream_handoff_allowed:true},{run_id:'skill05-initial-content-package-2026-08-07-refashion-lab',skill_id:'05',final_status:'PASS_PACKAGE_READY_FOR_ADMIN_IMPORT',downstream_handoff_allowed:true});
const existing=new Set(reg.artifacts.map(x=>x.path));
for(const [p,category,skill,reason] of files){const abs=path.join(root,p); if(!fs.existsSync(abs)) throw new Error('LIFECYCLE_ARTIFACT_MISSING_'+p); const st=fs.statSync(abs); const item={path:p,category,created_by_skill:skill,referenced_by:[`docs/planning/${skill==='Skill04'?'04-skill-output-manifest-v1.json':'05-skill-output-manifest-skill05-initial-content-package-2026-08-07-refashion-lab.json'}`],size_bytes:st.isDirectory()?0:st.size,sha256:st.isDirectory()?null:sha(abs),recommended_action:category==='TEMPORARY'?'RETAIN_UNTIL_HANDOFF':'KEEP',reason,deleted:false,run_id:skill==='Skill04'?'skill04-initial-content-preparation-2026-08-07-refashion-lab':'skill05-initial-content-package-2026-08-07-refashion-lab'}; if(!existing.has(p)){reg.artifacts.push(item);existing.add(p)}}
fs.writeFileSync(registryPath,JSON.stringify(reg,null,2)+'\n'); console.log(JSON.stringify({registry:rel(registryPath),added:files.length,status:'PASS'},null,2));
