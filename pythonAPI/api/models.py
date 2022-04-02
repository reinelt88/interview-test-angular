from django.db import models


class Student(models.Model):
    FirstName = models.CharField(max_length=60, null=False)
    LastName = models.CharField(max_length=60, null=False)
    Email = models.CharField(max_length=320, unique=True, null=False)
    Major = models.CharField(max_length=60, null=False)
    Score = models.IntegerField(default=0)

    def __str__(self):
        return self.FirstName + " " + self.LastName
