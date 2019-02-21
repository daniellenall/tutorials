class Dog:
    def __init__(self, name, age, furcolor):
        self.name = name;
        self.age = age;
        self.furcolor = furcolor;

    def bark(self):
        print("WOOF")

mydog = Dog("Nala", 3, "Fawn")

print mydog.name
