import { IBlock } from "@/types/blocks.type";

export function getBlockCustom(blocks: IBlock[]) {
  const html = blocks.find(b => b.type === 'Rich Text')?.data?.content as string || '';
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || '';

  const result: Record<string, string> = {};
  text.split(',').map(p => p.trim()).forEach(pair => {
    const [key, value] = pair.split(':').map(s => s.trim());
    if (key && value) result[key] = value;
  });

  return result;
}
