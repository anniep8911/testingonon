/**
 * 스토리 생성기 함수
 * @param {Function} SinglePage - 외부에서 import한 렌더링 함수
 * @param {string[]} types - ex: ['block', 'section', 'element']
 */
import { marked } from 'marked';

export default function makeStories(SinglePage,md, types, moduleType,ext=[]) {
    const stories = {};

     const cleanCode = (html) =>
        (moduleType ==='style')?html.match(/<style[\s\S]*?<\/style>/gi)?.join('\n')
        :
        (moduleType ==='both')? html 
        :
        html
        // remove <style> blocks
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        // remove inline style="..." or style='...'
        .replace(/\sstyle\s*=\s*(["'])(?:\\.|(?!\1)[^\\])*?\1/gi, '')
        // remove unquoted inline styles
        .replace(/\sstyle\s*=\s*[^>\s]+/gi, '')
        // handle escaped versions (&quot;, &#39;)
        .replace(/\sstyle\s*=\s*(?:&quot;|&#39;).*?(?:&quot;|&#39;)/gi, '')
        .trim();

    types.forEach((type) => {
      stories[type] = {
        render: () => SinglePage(type,ext),
        parameters: {
          docs: {
            source: {
              code:  cleanCode(SinglePage(type,ext)),
              language: 'html',
            },
            description: { story: marked(md(type)) },
          },
        },
      };
    });

    return stories;
  };