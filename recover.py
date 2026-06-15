import json
import os
import ast

transcript_path = r"C:\Users\uni-tech\.gemini\antigravity-ide\brain\5ef2f394-575a-45c2-b835-ff7e95946d8e\.system_generated\logs\transcript.jsonl"
base_dir = r"c:\Users\uni-tech\Desktop\ignovex"

files_to_recover = {}

def decode_val(v):
    if isinstance(v, str):
        try:
            return json.loads(v)
        except:
            return v
    return v

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            entry = json.loads(line)
            if entry.get("type") in ["PLANNER_RESPONSE", "ACTION_RESPONSE"]:
                if "tool_calls" in entry:
                    for call in entry["tool_calls"]:
                        if call.get("name") in ["write_to_file", "default_api:write_to_file"]:
                            args = call.get("args", {})
                            
                            target_file = decode_val(args.get("TargetFile"))
                            code_content = decode_val(args.get("CodeContent"))
                            
                            if target_file and code_content:
                                # Normalize path
                                path = str(target_file).replace('/', '\\')
                                if "src\\app" in path or "src\\components" in path or "globals.css" in path or "layout.tsx" in path or "page.tsx" in path:
                                    files_to_recover[path] = code_content
                                    
                        elif call.get("toolName") in ["write_to_file", "default_api:write_to_file"]:
                            args = call.get("args", {})
                            target_file = decode_val(args.get("TargetFile"))
                            code_content = decode_val(args.get("CodeContent"))
                            if target_file and code_content:
                                path = str(target_file).replace('/', '\\')
                                if "src\\app" in path or "src\\components" in path or "globals.css" in path or "layout.tsx" in path or "page.tsx" in path:
                                    files_to_recover[path] = code_content
        except Exception as e:
            continue

print(f"Found {len(files_to_recover)} files to recover.")

for path, content in files_to_recover.items():
    if "ignovex" in path.lower() and not "ignovex-next" in path.lower():
        # Clean path if it has weird quoting
        clean_path = path.strip('"\'')
        os.makedirs(os.path.dirname(clean_path), exist_ok=True)
        with open(clean_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Recovered: {clean_path}")
