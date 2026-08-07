# Codex 落盘提示词：Skill 01B persist_authority

请执行 Skill 01B 的 `persist_authority` 模式。

## 固定输入

```text
project_root: C:\Users\aoemo\Documents\Refashion
site_id: refashion-lab
site_name: refashionlab
archive_batch_id: beginner-refashion-lab-2026-08-05
locked_package: [本 ZIP 文件路径]
raw_content_source_path: C:\Users\aoemo\Documents\Article\content\site-content-material-package\beginner-refashion-lab-2026-08-05.rar
```

## 允许执行

1. 验证 ZIP、`skill01-output-manifest-v1.json`、`site_id`、`archive_batch_id` 和所有锁定文件。
2. 将锁定文件写入 `C:\Users\aoemo\Documents\Refashion` 的准确 canonical 路径。
3. 将原始素材包原样归档到 `imports/raw-content/original/`，不得改写、重命名内容文件或把生成物当作原始源。
4. 计算并记录 SHA256。
5. 生成或更新 `docs/planning/artifact-lifecycle-registry-v1.json`、本次 cleanup report 和 raw-content manifest。
6. 校验路径、文件非空、Schema、身份一致性、时间策略和下游可读性。

## 严格禁止

- 不得重写蓝图、SEO/GEO、Legal 正文或时间策略；
- 不得推断或修改 `site_id`、锚点日期、文章顺序、时区或批准时间；
- 不得运行 Skill 02–09；
- 不得构建网站、打开 Admin、注册项目、commit、push 或 deploy；
- 不得删除原始素材、锁定产物或未完成审计的文件。

## 成功条件

只有在所有产物已准确写入 project_root、原始源已本地归档、哈希与身份一致、下游可读性校验通过后，才输出：

```text
SKILL01B_PERSISTENCE_PASS
```

否则输出明确的 `BLOCKED_*` 原因，不要猜测修复。
