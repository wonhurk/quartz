#!/usr/bin/env node
import { installPlugins, parsePluginSource, isLocalSource } from "./gitLoader.js"
import fs from "fs"
import path from "path"
import YAML from "yaml"

async function main() {
  const configPath = path.join(process.cwd(), "quartz.config.yaml")
  if (!fs.existsSync(configPath)) {
    console.log("No quartz.config.yaml found, skipping plugin installation.")
    return
  }

  const raw = fs.readFileSync(configPath, "utf-8")
  const config = YAML.parse(raw)
  const plugins: Array<{ source: string; enabled?: boolean }> = config.plugins ?? []

  const externalSources = plugins
    .filter((p) => p.enabled !== false && !isLocalSource(p.source))
    .map((p) => p.source)

  if (externalSources.length === 0) {
    console.log("No external plugins to install.")
    return
  }

  console.log(`Installing ${externalSources.length} plugin(s) from Git...`)

  const specs = externalSources.map((source: string) => parsePluginSource(source))
  const installed = await installPlugins(specs, { verbose: true })

  if (installed.size === externalSources.length) {
    console.log("✓ All plugins installed successfully")
  } else {
    console.error(`✗ Only ${installed.size}/${externalSources.length} plugins installed`)
    process.exit(1)
  }
}

main().catch((err) => {
  console.error("Failed to install plugins:", err)
  process.exit(1)
})
