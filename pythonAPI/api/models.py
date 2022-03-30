from django.db import models

# Create your models here.
class Student(models.Model):
    FirstName = models.CharField(max_length=60)
    LastName = models.CharField(max_length=60)
    Email = models.CharField(max_length=320)
    Major = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.FirstName + " " + self.LastName
