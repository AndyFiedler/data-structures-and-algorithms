import os

base = './'

def recursive_skip(dir):
  for entry in os.listdir(dir):
    path = os.path.join(dir, entry)
    if path.find('node_modules') is not -1:
      return
    if os.path.isdir(path):
      recursive_skip(path)
      continue
    skip_defines(path)
    
def skip_defines(path):
  if path.find('test.js') is -1:
    return
  print('At', path)
  with open(path, 'r+') as file:
    contents = file.read()
    contents = contents.replace('.skip', '')
    contents = contents.replace('describe', 'describe.skip')
    file.seek(0)
    file.write(contents)
    file.close()
  print('Finished with', path)

recursive_skip(base)
