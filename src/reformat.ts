import { parse, format } from 'date-fns';


/**
 * Parses a date in one format, then outputs it in another, in one step.
 * Can be used as a formatter for full Date objects, as well.
 */
export function reformat(date: Date, output: string): string;
export function reformat(date: string, input: string, output?: string): string;
export function reformat(
  date: string | Date,
  inputOrOutput: string,
  output = 'yyyy-MM-dd',
): string {
  let parsed = new Date();
  let outputFormat = 'yyyy-MM-dd';

  if (typeof date === 'string') {
    parsed = parse(date, inputOrOutput, new Date());
    outputFormat = output;
  } else {
    outputFormat = inputOrOutput;
  }

  return format(parsed, outputFormat);
}
