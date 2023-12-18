import { HfInference } from '@huggingface/inference';
import { NextApiRequest, NextApiResponse } from 'next';
import { HuggingFaceStream, StreamingTextResponse } from 'ai';

const HF_ACCESS_TOKEN = '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';

export const runtime = 'edge';

const inference = new HfInference(HF_ACCESS_TOKEN);

export default async function POST(req: Request) {
  const { prompt } = await req.json();

  const response = await inference.textGenerationStream({
    model: 'OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5',
    inputs: `<|prompter|>${prompt}<|endoftext|><|assistant|>`,
    parameters: {
      max_new_tokens: 250,
      repetition_penalty: 1,
      truncate: 1000,
      return_full_text: false,
    },
  });

  const stream = HuggingFaceStream(response);

  return new StreamingTextResponse(stream);
}
