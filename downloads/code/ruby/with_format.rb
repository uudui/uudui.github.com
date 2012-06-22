#def with_format(format, &block)
#  old_format = @template_format
#  @template_format = format
#  result = block.call
#  @template_format = old_format
#  puts "======================#{result}========================"
#  return result
#end

def with_format(format, &block)
  old_formats = formats
  self.formats = [format]
  block.call
  self.formats = old_formats
  nil
end