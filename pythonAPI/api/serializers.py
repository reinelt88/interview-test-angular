import re

from rest_framework import serializers
from .models import Student


def validate_score(value):
    if value < 0 or value > 100:
        raise serializers.ValidationError("Score must be between 0 and 100")
    return value


def validate_email(value):
    if not re.match(r"[^@]+@[^@]+\.[^@]+", value):
        raise serializers.ValidationError("Invalid email address")
    return value


class StudentSerializer(serializers.ModelSerializer):
    Grade = serializers.SerializerMethodField()

    @staticmethod
    def get_Grade(obj):
        if obj.Score > 80:
            return "A"  # A
        elif 50 < obj.Score <= 80:
            return "B"  # B
        else:
            return "C"  # C

    class Meta:
        model = Student
        fields = ('id', 'FirstName', 'LastName', 'Email', 'Major', 'Score', 'Grade')
        extra_kwargs = {
            "Score": {"validators": [validate_score]},
            "Email": {"validators": [validate_email]}
        }
